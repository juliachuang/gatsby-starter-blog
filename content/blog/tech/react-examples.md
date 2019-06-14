---
title: Learning React
date: "2019-06-10"
description: Information as I'm learning react
---

##Arrow function expression

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


Option 1:
```javascript
{
    languageOptions.map(
    function(l) {
        return (<li>{l}</li>);
    })
}
```

Option 2:
```javascript
{languageOptions.map(l => (<li>{l}</li>))}
```

##Skip NPM on Maven
```mvnDebug tomcat7:run -Dskip.npm```


##Uncaught Invariant Violation: Minified React error #231

Uncaught Invariant Violation: Minified React error #231; visit https://reactjs.org/docs/error-decoder.html?invariant=231&args[]=onClick&args[]=number for the full message or use the non-minified dev environment for full errors and additional helpful warnings.

 
```javascript
      <ProgramStepWrapper stepnumber={5}>
          <Button btnType='utility' onClick={addAnotherTimezone()}>
              <span className="icon icon-add" aria-hidden="true"></span>Add2
          </Button>
              {this.state.timezonesList.map(i =>
                  (<DropDownTypeIn number={i}
                                   optionList={this.props.timezones.map(t => ({
                                       value: t,
                                       text: t,
                                       selected: false,
                                   }))}
                  />))
              }

```

## Error #185
Need to use `{this.addAnotherTimezone}` not `{this.addAnotherTimezone()}` 

```
    addAnotherTimezone() {
        let tz = this.state.timezonesList;
        tz.concat(2);
        this.setState({timezonesList: tz})
    }

    render() {
        return (
            <ProgramStepWrapper stepnumber={1} steptitle={"Setup Program"}>
          <Button btnType='utility' onClick={this.addAnotherTimezone}>
```

## Name & value are always default properties so you can always use them
e.g. `funcname(name, value) = () => {}`

## Functions called in render() vs elsewhere must be structured differently
`funcname() => {}` vs `funcname() = () => {}`

## Error #130
Uncaught Invariant Violation: Minified React error #130; visit https://reactjs.org/docs/error-decoder.html?invariant=130&args[]=undefined&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings. 


##How to export
This part specifies the bundles that your code exports to:
```javascript
module.exports = {
    entry: {
        //Lines in here
    }}
```

```javascript
const path = require('path')
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   
   module.exports = {
     entry: {
       example: ['./src/components/example/index.js'],
       createProgram: ['./src/components/createProgram/index.js'],
     },
     target: 'web',
     output: {
       path: path.join(__dirname, '/../src/main/webapp/static/react-components'),
       filename: '[name].bundle.js',
     },
     resolve: {
       modules: ['node_modules', path.join(__dirname, 'src')],
     },
     module: {
       rules: [
         {
           test: /\.js$/,
           exclude: /node_modules/,
           use: {
             loader: 'babel-loader',
           },
         },
         {
           test: /\.(png|woff|woff2|eot|ttf|svg)$/,
           loader: 'url-loader?limit=100000',
         },
         {
           test: /\.(sa|sc|c)ss$/,
           use: ['style-loader', 'css-loader', 'sass-loader'],
         },
       ],
     },
     plugins: [
       new HtmlWebpackPlugin({
         template: './src/index.html',
       }),
     ],
   }


## Testing
`npm run start` - load local server
`npm run build` - rebuild
`npm run prettier`  - just shows you the prettier diff
`npm run format`  - actually formats via prettier