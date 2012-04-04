
//
//     github-growl
//     Copyright (c) 2012 Nick Baugh (niftylettuce@gmail.com)
//     MIT Licensed
//

// * Author: [@niftylettuce](https://twitter.com/#!/niftylettuce)
// * Website: <http://github.com/niftylettuce/>
// * Source: <https://github.com/niftylettuce/github-growl/>

// # github-growl

var growl     = require('growl')
  , GitHubApi = require('github').GitHubApi
  , github    = new GitHubApi(true);
