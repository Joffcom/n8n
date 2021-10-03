import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';


export class QuickFileApi implements ICredentialType {
	name = 'quickFileApi';
	displayName = 'Quick File API';
	documentationUrl = 'quickfile';
	properties: INodeProperties[] = [
		{
			displayName: 'Account Number',
			name: 'accountNumber',
			type: 'string',
			default: '',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Application ID',
			name: 'applicationId',
			type: 'string',
			default: '',
		},
	];
}
