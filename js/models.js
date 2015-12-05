var Review = Backbone.Model.extend(
{
	defaults:
	{
		message: "",
		class_id: "",
		workload: "",
		helpfulness: 0
	},
	initialize: function()
	{
		
	}
});

var Reviews = Backbone.Collection.extend(
{
	model: Review
});