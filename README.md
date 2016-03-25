###Simple and pretty responsive bootstrap timeline

##Demo
http://sanex3339.github.io/bootstrap-responsive-timeline/

##Installation
```
bower install bootstrap-responsive-timeline --save
```

Then import `timeline/timeline.less` file from `bower` vendor directory to your `less` file.

##Markup
Simple markup:
####Notice! It's important to use `<li>` tags for `timeline-item` and `<ol>` tags for `timeline-label`!

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

You can force apply single column mode by adding `timeline-single-column` class to `<ul class="timeline">`.

```html
<ul class="timeline timeline-single-column">
	...
</ul>
```

You can force set position of `timeline-item` element by adding `timeline-item-left` or `timeline-item-right` classes.

```html
<ul class="timeline">
	<li class="timeline-item timeline-item-left">
		...
	</li>
	
	<li class="timeline-item timeline-item-right">
		...
	</li>
</ul>
```

You can set size of `timeline-item` arrow by adding one of these classes to `timeline-item` element: `timeline-item-arrow-sm`, `timeline-item-arrow-md`, `timeline-item-arrow-lg`.

You can apply one of five color schemes to `timeline-event` elements:

* `timeline-event-default`
* `timeline-event-primary`
* `timeline-event-info`
* `timeline-event-warning`
* `timeline-event-danger`

And/or to `timeline-point` elements:

* `timeline-point-default`
* `timeline-point-primary`
* `timeline-point-info`
* `timeline-point-warning`
* `timeline-point-danger`

```html
<ul class="timeline">
	<li class="timeline-item">
		<div class="timeline-point timeline-point-danger">
			...
		</div>
		<div class="timeline-event timeline-event-danger">
			...
		</div>
	</li>
</ul>
```

Also you can set small dotted `timeline-point` by adding `timeline-point-blank` class.

```html
<div class="timeline-point timeline-point-blank"></div>
```

You can insert `table` or `panel` components inside `timeline-event` element.

```html
<li class="timeline-item timeline-item-arrow-sm">
	<div class="timeline-point timeline-point-primary">
		<i class="fa fa-star"></i>
	</div>
	<div class="timeline-event timeline-event-primary">
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">Panel header</h3>
			</div>
			<div class="panel-body">
				Panel content
			</div>
		</div>
	</div>
</li>

<li class="timeline-item timeline-item-arrow-sm">
	<div class="timeline-point timeline-point-primary">
		<i class="fa fa-star"></i>
	</div>
	<div class="timeline-event timeline-event-primary">
		<table class="table table-striped table-hover">
			<tr>
				<th>timeline-event with table</th>
				<th>timeline-event with table</th>
			</tr>
			<tr>
				<td>cell</td>
				<td>cell</td>
			</tr>
			<tr>
				<td>cell</td>
				<td>cell</td>
			</tr>
			<tr>
				<td>cell</td>
				<td>cell</td>
			</tr>
		</table>
	</div>
</li>
```

You can apply labels to timeline by adding `<ol>` tags with `timeline-label` class:

```html
<ol class="timeline-label">
	<span class="label label-info">label</span>
</ol>
```

Inside `timeline-label` you can place `button` element:

```html
<ol class="timeline-label">
	<button class="btn btn-danger"><i class="fa fa-ambulance"></i></button>
</ol>
```

##Have fun!
