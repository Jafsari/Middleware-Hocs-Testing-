import {
	FETCH_USERS
} from './types.js'

export function fetchUsers(){
	return {
		type:FETCH_USERS,
		payload: [
		{ name: 'Justin'},
		{ name: 'Kevin'},
		{ name: 'Alex'}
		]
	};
}