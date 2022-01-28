import {
	INodeProperties,
} from 'n8n-workflow';

export const conversionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'conversion',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a conversion',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a conversion',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a conversion by ID',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all conversions',
			},
		],
		default: 'create',
		description: 'The operation to perform.',
	},
];

export const conversionFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                conversion:create                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource: [
					'conversion',
				],
			},
		},
		description: `The affiliate’s email.`,
	},
	{
		displayName: 'First Name',
		name: 'firstname',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource: [
					'conversion',
				],
			},
		},
		default: '',
		description: `The affiliate’s firstname.`,
	},
	{
		displayName: 'Last Name',
		name: 'lastname',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'create',
				],
				resource: [
					'conversion',
				],
			},
		},
		default: '',
		description: `The affiliate’s lastname.`,
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
					'conversion',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			{
				displayName: 'Address',
				name: 'addressUi',
				placeholder: 'Address',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: false,
				},
				default: {},
				options: [
					{
						name: 'addressValues',
						displayName: 'Address',
						values: [
							{
								displayName: 'Line 1',
								name: 'address',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Line 2',
								name: 'address_two',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Postal Code',
								name: 'postal_code',
								type: 'string',
								default: '',
							},
							{
								displayName: 'City',
								name: 'city',
								type: 'string',
								default: '',
							},
							{
								displayName: 'State',
								name: 'state',
								type: 'string',
								default: '',
							},
							{
								displayName: 'Country Code',
								name: 'country',
								type: 'string',
								default: '',
								description: `The country’s ISO_3166-1 code. <a href="https://en.wikipedia.org/wiki/ISO_3166-1">Codes</a>.`,
							},
						],
					},
				],
			},
			{
				displayName: 'Company Name',
				name: 'companyName',
				type: 'string',
				default: '',
				description: `The affiliate’s company data.`,
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                                conversion:delete                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Conversion ID',
		name: 'conversionId',
		required: true,
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'conversion',
				],
				operation: [
					'delete',
				],
			},
		},
		description: 'The ID of the conversion.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                conversion:get                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Conversion ID',
		name: 'conversionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'affiliate',
				],
				operation: [
					'get',
				],
			},
		},
		description: 'The ID of the conversion.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                conversion:getAll                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: [
					'conversion',
				],
				operation: [
					'getAll',
				],
			},
		},
		default: false,
		description: 'If set to true, all the results will be returned.',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: [
					'conversion',
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
			maxValue: 1000,
		},
		default: 100,
		description: 'How many results to return.',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'conversion',
				],
				operation: [
					'getAll',
				],
			},
		},
		options: [
			{
				displayName: 'Affiliate ID',
				name: 'affiliateId',
				type: 'string',
				default: '',
				description: 'The affiliate ID.',
			},
			{
				displayName: 'Date From',
				name: 'dateFrom',
				type: 'string',
				default: '',
				description: 'The date to start searching from.',
			},
			{
				displayName: 'Date To',
				name: 'dateTo',
				type: 'string',
				default: '',
				description: 'The date to end the search.',
			},
			{
				displayName: 'External ID',
				name: 'externalId',
				type: 'string',
				default: '',
				description: 'The external ID.',
			},
			{
				displayName: 'Pending Commissions',
				name: 'pending',
				type: 'string',
				default: '',
				description: 'Only show conversions with pending commissions',
			},
			{
				displayName: 'Program ID',
				name: 'programId',
				type: 'string',
				default: '',
				description: 'The program ID.',
			},
		],
	},
];
