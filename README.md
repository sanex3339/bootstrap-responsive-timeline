###Simple and pretty responsive bootstrap timeline

##Demo
http://sanex3339.github.io/bootstrap-responsive-timeline/

##Installation
```
bower install bootstrap-responsive-timeline --save
```

Then import `timeline/timeline.less` file from `bower` vendor directory to your `less` file.

###Its important to use `<li>` tags for `timeline-item` and `<ol>` tags for `timeline-label`!

##Markup
```html
<ul class="timeline">
	<li class="timeline-item">
		<div class="timeline-point timeline-point-default">
			<i class="fa fa-money"></i>
		</div>
		<div class="timeline-event">
			<div class="timeline-heading">
				<h4>Event header text</h4>
			</div>
			<div class="timeline-body">
				<p>Event body text</p>
			</div>
			<div class="timeline-footer">
				<p class="text-right">Event footer text</p>
			</div>
		</div>
	</li>
	
	<ol class="timeline-label">
		<span class="label label-primary">09.03.2016</span>
	</ol>
</ul>
```