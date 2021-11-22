import {
	INodeProperties,
} from 'n8n-workflow';

import {
	vendorCreditAdditionalFieldsOptions,
} from './VendorCreditAdditionalFieldsOptions';

export const vendorCreditOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'get',
		description: 'Operation to perform',
		options: [
			{
				name: 'Create',
				value: 'create',
			},
			{
				name: 'Delete',
				value: 'delete',
			},
			{
				name: 'Get',
				value: 'get',
			},
			{
				name: 'Get All',
				value: 'getAll',
			},
			{
				name: 'Update',
				value: 'update',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'vendorcredit',
				],
			},
		},
	},
] as INodeProperties[];

export const vendorCreditFields = [
	// ----------------------------------
	//         vendorcredit: create
	// ----------------------------------
	{
		displayName: 'For Vendor',
		name: 'VendorRef',
		type: 'options',
		required: true,
		description: 'The ID of the vendor who the bill is for.',
		default: [],
		typeOptions: {
			loadOptionsMethod: 'getVendors',
		},
		displayOptions: {
			show: {
				resource: [
					'vendorcredit',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Line',
		name: 'Line',
		type: 'collection',
		placeholder: 'Add Line Item Property',
		description: 'Individual line item of a transaction.',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: [
					'vendorcredit',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			{
				displayName: 'Detail Type',
				name: 'DetailType',
				type: 'options',
				default: 'ItemBasedExpenseLineDetail',
				options: [
					{
						name: 'Account-Based Expense Line Detail',
						value: 'AccountBasedExpenseLineDetail',
					},
					{
						name: 'Item-Based Expense Line Detail',
						value: 'ItemBasedExpenseLineDetail',
					},
				],
			},
			{
				displayName: 'Account ID',
				name: 'accountId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Amount',
				name: 'Amount',
				description: 'Monetary amount of the line item.',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Description',
				name: 'Description',
				description: 'Textual description of the line item.',
				type: 'string',
				default: '',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'vendorcredit',
				],
				operation: [
					'create',
				],
			},
		},
		options: vendorCreditAdditionalFieldsOptions,
	},

	// ----------------------------------
	//         vendorcredit: delete
	// ----------------------------------
	{
		displayName: 'Credit ID',
		name: 'vendorcreditId',
		type: 'string',
		required: true,
		default: '',
		description: 'The ID of the credit to delete.',
		displayOptions: {
			show: {
				resource: [
					'vendorcredit',
				],
				operation: [
					'delete',
				],
			},
		},
	},

	// ----------------------------------
	//         vendorcredit: get
	// ----------------------------------
	{
		displayName: 'Credit ID',
		name: 'creditId',
		type: 'string',
		required: true,
		default: '',
		description: 'The ID of the credit to retrieve.',
		displayOptions: {
			show: {
				resource: [
					'vendorcredit',
				],
				operation: [
					'get',
				],
			},
		},
	},

	// ----------------------------------
	//         vendorcredit: getAll
	// ----------------------------------
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Return all results.',
		displayOptions: {
			show: {
				resource: [
					'vendorcredit',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 5,
		description: 'The number of results to return.',
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		displayOptions: {
			show: {
				resource: [
					'vendorcredit',
				],
				operation: [
					'getAll',
				],
				returnAll: [
					false,
				],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				placeholder: 'WHERE Metadata.LastUpdatedTime > \'2021-01-01\'',
				description: 'The condition for selecting credits. See the <a href="https://developer.intuit.com/app/developer/qbo/docs/develop/explore-the-quickbooks-online-api/data-queries">guide</a> for supported syntax.',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
			},
		],
		displayOptions: {
			show: {
				resource: [
					'vendorcredit',
				],
				operation: [
					'getAll',
				],
			},
		},
	},

	// ----------------------------------
	//         vendorcredit: update
	// ----------------------------------
	{
		displayName: 'Credit ID',
		name: 'creditId',
		type: 'string',
		required: true,
		default: '',
		description: 'The ID of the credit to update.',
		displayOptions: {
			show: {
				resource: [
					'vendorcredit',
				],
				operation: [
					'update',
				],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		required: true,
		displayOptions: {
			show: {
				resource: [
					'vendorcredit',
				],
				operation: [
					'update',
				],
			},
		},
		// filter out fields that cannot be updated
		options: vendorCreditAdditionalFieldsOptions.filter(property => property.name !== 'TotalAmt' && property.name !== 'Balance'),
	},
] as INodeProperties[];
