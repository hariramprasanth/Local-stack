const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient({
	endpoint: `http://${process.env.LOCALSTACK_HOSTNAME}:4566`, // This two lines are
});

exports.handler = async (event) => {
	console.log("Dynamodb post item lambda running");
	let parsedBody = JSON.parse(event.body);

	let response = {
		statusCode: 200,
		body: null,
	};

	let bodyToPut = {};
	bodyToPut.TableName = "my-sam-table";
	bodyToPut.operation = "create";
	bodyToPut.Item = {
		id: new Date().toString(),
		name: parsedBody.name,
	};

	try {
		await dynamo.put(bodyToPut).promise();
		console.log("Success: Everything executed correctly");
		response.body = "Item created";
	} catch (err) {
		console.error(err);
		response.body = err;
	}

	let result = {
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

	return result;
};
