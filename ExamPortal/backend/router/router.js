const express = require('express')
const app = express()

const { Users,adminDetail } = require('../controller')

module.exports = () => {
	app.post('/login', (req, res) => {
		res.send({ "data": req.body })
	})

	app.post('/signup', (req, res) => {
		res.send({ "data": req.body })
	})

	//candidates will view quesions using accesskey
	app.get('/test/:accessKey', (req, res) => {
		res.send("Hello Word")
	})

	//post answers selected by candidates
	app.post('/test', (req, res) => {
		res.send({ "data": req.body })
	})


	//admin will add examiner
	app.post('/examiner', (req, res) => {
		const response = adminDetail.adminDetails(req,res)
		return response;
	})
	//admin will view examiner
	app.get('/examiner', async(req, res) => {
		const out = await adminDetail.fetchData(req,res)
         return out
	})
	// admin will view examiner by id
	app.get('/examiner/id', async(req, res) => {
		const out = await adminDetail.fetchDatabyid(req,res)
         return out
	})
	//admin will delete examiner using id of examiner
	app.delete('/examiner', async(req, res) => {
		//console.log(req.body)
		const out=await adminDetail.deleteuser(req,res);
	})
	//admin will view test created by each examiner using their id
	app.patch('/examiner', async(req, res) => {
		const out=await adminDetail.updateuser(req,res);
		return out
	})

	//examiner will create test details
	app.post('/exam', (req, res) => {
		 Users.examDetails(req, res)
	})
	//examiner will view test
	app.get('/exam', (req, res) => {
		res.send("hello world")
	})
	//examiner will edit test details
	app.patch('/exam', (req, res) => {
		res.send({ "data": req.body })
	})
	//examiner will delete test using test id
	app.delete('/exam/:id', (req, res) => {
		res.send({ "data": req.body })
	})
	//examiner will view performance of candidates
	app.get('/exam/performance', (req, res) => {
		res.send("Hello Word")
	})

	//examiner will write tests questions
	app.post('/exam/question', (req, res) => {
		res.send({ "data": req.body })
	})
	//examiner will views questions 
	app.get('/exam/question', (req, res) => {
		res.send("hello world")
	})
	//examiner will edit questions
	app.patch('/exam/question/:id', (req, res) => {
		res.send({ "data": req.body })
	})

	//examiner will delete question by id
	app.delete('/exam/question/:id', (req, res) => {
		res.send({ "data": req.body })
	})

	return app
}