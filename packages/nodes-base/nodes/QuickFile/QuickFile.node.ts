import { triggerAsyncId } from 'async_hooks';
import { request } from 'http';
import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeApiError,
} from 'n8n-workflow';

import {
	OptionsWithUri,
} from 'request';

export class QuickFile implements INodeType {
	description: INodeTypeDescription = {
			displayName: 'QuickFile',
			name: 'quickFile',
			icon: 'file:Quickfile.png',
			group: ['transform'],
			version: 1,
			description: 'Consume QuickFile API',
			defaults: {
					name: 'QuickFile',
					color: '#1A82e2',
			},
			inputs: ['main'],
			outputs: ['main'],
			credentials: [
				{
					name: 'quickFileApi',
					required: true,
				},
			],
			properties: [
				// Resource
				// Client
				// Document
				// Invoice
				// Item (Inventory)
				// Supplier
				// Report
				// System
				{
					displayName: 'Resource',
					name: 'resource',
					type: 'options',
					options: [
						{
							name: 'Client',
							value: 'client',
						},
						{
							name: 'Document',
							value: 'document',
						},
						{
							name: 'Invoice',
							value: 'invoice',
						},
						{
							name: 'Item',
							value: 'item',
						},
						{
							name: 'Supplier',
							value: 'supplier',
						},
						{
							name: 'Report',
							value: 'report',
						},
						{
							name: 'System',
							value: 'system',
						},
					],
					default: 'Client',
					required: true,
					description: 'Resource to consume',
				},
				{
					displayName: 'Operation',
					name: 'operation',
					type: 'options',
					displayOptions: {
						show: {
							resource: [
								'client',
							],
						},
					},
					options: [
						{
							name: 'Create',
							value: 'create',
							description: 'Create a client',
						},
						{
							name: 'Delete',
							value: 'delete',
							description: 'Delete a client',
						},
						{
							name: 'Get',
							value: 'get',
							description: 'Get a client',
						},
						{
							name: 'Search',
							value: 'search',
							description: 'Search clients',
						},
						{
							name: 'Update',
							value: 'update',
							description: 'Update a client',
						},
					],
					default: 'create',
					description: 'The operation to perform.',
				},
				// Client: GET
				{
					displayName: 'Client ID',
					name: 'clientid',
					type: 'string',
					required: true,
					displayOptions: {
						show: {
							operation: [
								'get',
							],
							resource: [
								'client',
							],
						},
					},
					default:'',
					description:'Client ID',
				},
			],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
			let responseData;
			const resource = this.getNodeParameter('resource', 0) as string;
			const operation = this.getNodeParameter('operation', 0) as string;
			const credentials = await this.getCredentials('quickFileApi') as IDataObject;

			// CLIENT
			if (resource === 'client') {
				// GET
				if (operation === 'get') {
					console.log('Starting Get');
					const clientID = this.getNodeParameter('clientid', 0) as string;
					/*const data: IDataObject = {
						clientID,
					};*/

					const crypto = require('crypto');
					const submission = '00005';
					//hash = account + api + submission
					//const hash = ;
					let hash = crypto.createHash('md5').update(`${credentials.accountNumber}${credentials.apiKey}` + submission).digest("hex")

					const data: IDataObject = {
						payload: {
							Header: {
								MessageType: 'Request',
								SubmissionNumber: submission,
								Authentication: {
									AccNumber: `${credentials.accountNumber}`,
									MD5Value: hash,
									ApplicationID: `${credentials.applicationId}`,
								},
							},
							Body: {
								ClientID: clientID,
							}
						}
					}

					const options: OptionsWithUri = {
						method: 'POST',
						body: data,
						uri: 'https://api.quickfile.co.uk/1_2/client/get',
						json: true,
					};

					//console.log(JSON.stringify(options));
					//console.log(JSON.stringify(data));

					try {
						responseData = await this.helpers.request.call(this,options);
					} catch (error) {
						throw new NodeApiError(this.getNode(), error);
					}
					//console.log(responseData);
				}

			}
			//console.log("returning");
			return [this.helpers.returnJsonArray(responseData.Client_Get.Body)];
	}
}
