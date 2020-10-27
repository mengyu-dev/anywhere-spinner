# Put spinner anywhere in Angular

## Do you need this library ?

This library aims to improve user experience when data is loading in angular project.
This library is different than [Angular Material Spinner](https://material.angular.io/components/progress-spinner/overview) or [Ng Primer Spinner](https://www.primefaces.org/primeng/v9.1.6-lts/#/progressspinner). This library uses angular cdk overlay to put the spinner over any content. This is done without adding / modifying HTML or CSS of the inner component, but by the non intrusive way. 

## Usage

Just put the directive `anywhere-spinner` in the html container tag and bind a status variable to control the spinner status.

``` html
<div anywhere-spinner [anywhere-spinner-status]="loading"></div>
```

If want to put the spinner over a component,
``` html
<some-component anywhere-spinner [anywhere-spinner-status]="loading"></some-component>
```

In the above cases, loading is a variable,
```typescript
loading = true;
//fetch data by http or some tasks
loading = false;
```

In some situations, we can also bind an observable variable to control the spinner status.
``` html
<div anywhere-spinner [anywhere-spinner-status$]="loading$"></div>
```

## More Options
`anywhere-spinner-options` is available to pass more options.

``` html
<div anywhere-spinner [anywhere-spinner-status]="loading" [anywhere-spinner-options]="options"></div>
```

```typescript
options = {
    "message":"Waiting data from server",
    "type":"ring"
    }
```

### Spinner types

Thanks for [Pure CSS Loaders](https://loading.io/css/) under CC0 License! This library integrates these 12 types spinners :

- circle
- dual-ring
- facebook
- heart 
- ring
- roller
- default
- ellipsis
- grid
- hourglass
- ripple
- spinner


<img src="https://raw.githubusercontent.com/mengyu-dev/anywhere-spinner/main/projects/ngx-anywhere-spinner/spinner-types.png" width="300" height="300"> <img src="https://raw.githubusercontent.com/mengyu-dev/anywhere-spinner/main/projects/ngx-anywhere-spinner/spinner-types-1.png" width="300" height="300">

## License
 MIT, feel free !
