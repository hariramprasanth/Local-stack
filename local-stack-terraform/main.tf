terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region                      = "ap-south-1"
  access_key                  = "temp"
  secret_key                  = "temp"
  skip_credentials_validation = true
  skip_region_validation      = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true
  s3_force_path_style         = true
  endpoints {
    s3 = "http://localhost:4566/"
  }

}

resource "aws_s3_bucket" "my_first_bucket" {
  bucket = "myfirstbucket"
  acl    = "public-read"
}

resource "aws_lambda_function" "test_lambda" {
  filename      = "test-lambda.zip"
  function_name = "my-test-lambda-terraform"
  role          = "arn:aws:iam::000000000000:role/lambda-role"
  handler       = "index.handler"

  runtime = "nodejs12.x"
}