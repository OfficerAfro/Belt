console.log("rests.js is running");
const mongoose = require('mongoose');
const Rest = mongoose.model('Rest');
const Review = mongoose.model('Review');

class RestController {
    getAll(req, res){
        Rest.find({})
            .then(rests => res.json(rests))
            .catch(err => res.json(err));
    }
    getOne(req, res){
        Rest.findOne({_id: req.params._id})
            .then(one_rest =>res.json(one_rest))
            .catch(err => res.json(err));
    }
    create(req, res) {
        let rest = new Rest(req.body);
        rest.save()
            .then(() => res.json({'msg': 'REST NOW FOR THE STORM'}))
            .catch(err => res.json(err));
    }
    review(req, res) {
        let _id = req.params._id;
        let review = new Review(req.body);
        Rest.findByIdAndUpdate({_id}, {$push: {review: review}}, {runValidators: true})
            .then( () => res.json({'msg': 'LIFE DESTROYED'}))
            .catch(err => res.json(err));
    }
    update(req, res) {
        let _id = req.params._id;
        Rest.findByIdAndUpdate({_id}, req.body, {runValidators: true})
            .then( () => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
	}
    delete(req, res) {
        Rest.deleteOne({_id: req.params._id})
            .then(() => res.json({'msg': 'New Home!'}))
            .catch(err => res.json(err));
    }
}




module.exports = new RestController();