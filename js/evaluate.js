var reviews = new ReviewsCollection();
var r1 = new Review({message:"This is a message",class_id:"Class 101",workload:"Easy",helpfulness:100});
var r2 = new Review({message:"This is another message",class_id:"Class 102",workload:"Hard",helpfulness:1});
reviews.add(r1);
reviews.add(r2);

var ReviewsView = Backbone.View.extend(
{
	el: "#reviews-table-body",
	initialize: function()
	{
		this.render();
	},
	render: function()
	{
		reviews.each(function(review)
		{
			this.$(this.el).append(
				"<tr>" +
					"<td>" + review.get("class_id") + "</td>" +
					"<td>" + review.get("workload") + "</td>" +
					"<td>" + review.get("message") + "</td>" +
					"<td>" + review.get("helpfulness") + "</td>" +
				"</tr>"
			);
		});
		
		return this;
	}
});

var view = new ReviewsView();
