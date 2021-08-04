import {
	INodeProperties,
} from 'n8n-workflow';

import {
	getSearchFilters,
} from './GenericFunctions';

export const orderOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'order',
				],
			},
		},
		options: [
			{
				name: 'Cancel',
				value: 'cancel',
				description: 'Cancel an order',
			},
			{
				name: 'Create Invoice',
				value: 'createInvoice',
				description: 'Create a sales order invoice ',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get an order',
			},
			{
				name: 'Ship',
				value: 'ship',
				description: 'Ship an order',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all orders',
			},
		],
		default: 'cancel',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const orderFields = [

	/* -------------------------------------------------------------------------- */
	/*                                   order:cancel			                  */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Order ID',
		name: 'orderId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'order',
				],
				operation: [
					'cancel',
					'get',
					'ship',
					'createInvoice',
				],
			},
		},
	},
	/* -------------------------------------------------------------------------- */
	/*                                   order:getAll			                  */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [
					'order',
				],
				operation: [
					'getAll',
				],
			},
		},
		default: false,
		description: 'If all results should be returned or only up to a given limit.',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'order',
				],
				operation: [
					'getAll',
				],
				returnAll: [
					false,
				],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 10,
		},
		default: 5,
		description: 'How many results to return.',
	},
	...getSearchFilters('order', 'getOrderAttributes'),

] as INodeProperties[];
