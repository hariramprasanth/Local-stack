DOCS: https://docs.google.com/document/d/1PvR2n-5okD89VpxSpHLxfuzm0n9o9NTBGDssoV6trNE/edit


https://stackoverflow.com/questions/57420137/unrecognizedclientexception-when-invoking-a-lambda-from-another-lambda-using-loc

https://github.com/localstack/localstack/issues/5131


APi end point

http://localhost:4566/restapis/kidjcjcti8/prod/_user_request_/get-item
http://localhost:4566/restapis/kidjcjcti8/prod/_user_request_/post-item


kidjcjcti8 ==> apigateway id
get-item ===>path


http://localhost:4566/restapis/dcgqkb9c9n/prod/_user_request_/get-item
To run docker locally
docker run -p 8000:8000 amazon/dynamodb-local -jar DynamoDBLocal.jar
 -sharedDb