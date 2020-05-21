# Hacker News Reader

## Introduction

This is a Demo React app to read Hacker News by exercising the Hacker News Firebase API.

Goals:
1. Develop a web application in ReactJS that is consuming HackerNews REST API to:
    * Display the top 10 Stories; and
    * Display top 20 comments of those stories; and
    * Is responsive design
*Note* Please keep in mind the following three main factors:
Performance
Efficiency
Build and design for extensibility
2. Please provide your test in a public git repository
3. Bonus point, include Unit Tests
Documentation:

This API is pretty low-level so it was difficult to efficiently collect the top ten stories without making a lot of requests. The API returns an unsorted list of more than 400 story IDs. Each story ID needed to be retrieved to get the story score in order to get the score for the story. Only the ten highest stories needed to be displayed.

My first efforts didn't produce a good result. Making 400 requests and then waiting for the results wasn't going to be a good user experience so I decided to start displaying the results as they came in replacing lower scoring stories with higher ones on the fly. This worked better. After running the app a number of times I noticed that the bulk of the list returned pretty quickly but the last few took longer and longer. I decided to settle on only retieving the first 100 stories and finding the top 10 of those. This gave the best performance and allowed me to move onto the next problem of retrieving the comments.

Comments are easier because they don't have a score to worry about. I just retrieved the first 20 top level comments on each story. I decided however to not to do this automatically because this would 200 more requests tying up the system. Instead I added a button to each story so the user could retrieve them is they were interested. Once the comments were retrieved they would stay cached in memory.

## Installing and running

This app can be installed locally by running the command
```
npm i
```
The local dev server can be run by
```
npm start
```
Unit tests can be run by
```
npm test
```
