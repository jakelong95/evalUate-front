var ReviewView = Backbone.View.extend(
{
	initialize: function()
	{
		this.render();
	},
	render: function()
	{
		this.$el.html("<h1>Hey</h1>");
	},
});

var view = new ReviewView({el: $("#container")});