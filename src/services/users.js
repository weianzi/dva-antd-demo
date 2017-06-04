import request from '../utils/request';

export function fetch({ page = 1 }) {
	let data = request(`/api/users?_page=${page}&_limit=5`);
	//console.log(data)
  return data;
}