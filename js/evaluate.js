var app = "http://evaluate-app.herokuapp.com";

$(document).ready(function()
{
	//Get the department listings
	$.get(app + "/department", function(data)
	{
		var depts = [];
		for(var id in data)
		{
			depts.push(data[id].title);
		}

		var deptsView = new DepartmentListingView({depts: depts});
	});
});

var reviews = new ReviewsCollection();
var r1 = new Review({message:"This is a message",class_id:"Class 101",workload:"Easy",helpfulness:100});
var r2 = new Review({message:"This is another message",class_id:"Class 102",workload:"Hard",helpfulness:1});
reviews.add(r1);
reviews.add(r2);

//var view = new ReviewsView({reviews: reviews});
