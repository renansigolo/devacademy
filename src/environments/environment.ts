// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: require('../../package.json').version,
  firebase: {
    apiKey: 'AIzaSyDYI-MV5Y38DvpRa7K032IjUsSCzLYQ0Bs',
    authDomain: 'devacademyau-staging.firebaseapp.com',
    databaseURL: 'https://devacademyau-staging.firebaseio.com',
    projectId: 'devacademyau-staging',
    storageBucket: 'devacademyau-staging.appspot.com',
    messagingSenderId: '690269475120',
    appId: '1:690269475120:web:a13bad22da8e132e0e38f5'
  },
  cloudFunctionUrl:
    'https://us-central1-devacademyau-staging.cloudfunctions.net'
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
