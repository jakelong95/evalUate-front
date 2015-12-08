var ReviewsView = Backbone.View.extend(
{
	el: $("#reviews-listing"),
	template: _.template(document.getElementById("review-template").textContent),
	initialize: function(options)
	{
		this.reviews = options.reviews;
		this.render();
	},
	render: function()
	{
		this.$el.html(this.template({reviews: this.reviews}));
		return this;
	}
});

var DepartmentListingView = Backbone.View.extend(
{
	el: $("#departments-sidebar"),
	template: _.template(document.getElementById("department-sidebar-template").textContent),
	initialize: function(options)
	{
		this.depts = options.depts;
		this.render();
	},
	render: function()
	{
		this.$el.html(this.template({departments: this.depts}));
		return this;
	}
});