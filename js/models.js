var Review = Backbone.Model.extend(
{
	defaults:
	{
		message: "",
		class_id: "",
		workload: "",
		helpfulness: 0,
		createdAt:""
	},
	initialize: function(data)
	{
		this.createdAt = (new Date(data.createdAt)).toDateString();
	}
});

var ReviewsCollection = Backbone.Collection.extend(
{
	model: Review
});
