var app = "http://evaluate-app.herokuapp.com";

$(document).ready(function()
{
	//Get the department listings
	$.get(app + "/department", function(data)
	{
		for(var id in data)
		{
			$("#departments_sidebar").append("<li class='department_listing black-text'>" + data[id].title + "</li>");
		}
	});
});

var reviews = new ReviewsCollection();
var r1 = new Review({message:"This is a message",class_id:"Class 101",workload:"Easy",helpfulness:100,createdAt: "2015-12-05T16:22:35.299Z"});
var r2 = new Review({message:"This is another message",class_id:"Class 102",workload:"Hard",helpfulness:1,createdAt: "2015-12-05T16:22:35.299Z"});
reviews.add(r1);
reviews.add(r2);

var ReviewsView = Backbone.View.extend(
{
	el: $("#reviews"),
	template: _.template(document.getElementById("review-template").textContent),
	initialize: function(options)
	{
		this.reviews = options.reviews;
		this.render();
	},
	render: function()
	{
		this.$el.append(this.template({reviews: this.reviews}));

		return this;
	}
});

var view = new ReviewsView({reviews: reviews});
