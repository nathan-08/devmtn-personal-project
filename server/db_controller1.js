module.exports={
    addRegulatoryNotice: (req, res)=>{
        const db = app.get('db')        
        const {date, title, summary, link} = req.body
        console.log('got this from front: ', date, title, summary, link)
        db.add_regulatory_notice(date, title, summary, link)
          .then(()=>{res.status(200).send('okeydokey artichokey')})
    }
}