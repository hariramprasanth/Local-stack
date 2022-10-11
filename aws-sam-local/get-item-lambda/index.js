const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient({
	endpoint: `http://${process.env.LOCALSTACK_HOSTNAME}:4566`,
});

exports.handler = async () => {
	console.log("Dynamodb get item lambda running");

	let response = {
		statusCode: 200,
		body: null,
	};

	let queryParams = {
		TableName: "my-sam-table",
	};

	try {
		response.body = await dynamo.scan(queryParams).promise();
		console.log("Success: Everything executed correctly");
	} catch (err) {
		console.error(err);
		response.body = err;
	}

	let res = {
		body: JSON.stringify(response.body),
		statusCode: response.statusCode,
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
			"Access-Control-Allow-Methods": "OPTIONS,GET,POST",
			"Access-Control-Allow-Credentials": true,
			"Access-Control-Allow-Origin": "*",
			"X-Requested-With": "*",
		},
	};

	return res;
};
