# react-animation-example

Run `npm install` to download all dependencies.

Then run `npm start` to launch a WebPack development server that listens on port 3000.

[http://locahost:3000](http://localhost:3000) will display the example.






CSS animations are triggered when an animation class is applied to a DOM element.  If you want to replay an animation, you will need to remove the animation class and add it again.

A common method of doing this is to register a callback that is invoked when an animation ends.

Another solution is to have 2 duplicate animations and to toggle between them.  This is the approach used in this example.

The CSS is defined in `app.css` and the main animation logic is in `components/TableCell.jsx`.
