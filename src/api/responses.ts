import { STATUS_CODES } from 'http';


export const ok = (data: any) => ({
	status: STATUS_CODES['OK'],
	data
});

export const created = (data: any) => ({
	status: STATUS_CODES['CREATED'],
	data
});

export const internalServerError = (data: any) => ({
	status: STATUS_CODES['INTERNAL_SERVER_ERROR'],
	data
});
