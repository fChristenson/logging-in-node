# Log masking in Node

## What we will cover

* What is masking?
* Why is it important?
* A quick and dirty way to make a mask

## Videos

- [Logging in Node](https://www.youtube.com/watch?v=k-o9UoL-pQg)

## Notes

Logging is important but sometimes you need to be careful with what you log.
It is bad form to log out user data such as emails and password and so a nice
approach to solve this is to use a mask.

A mask is just a placeholder value instead of the real value so that you can still
log out what the datastructure is but without exposing the private information.
