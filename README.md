# Utility Manager Web
[![CircleCI](https://circleci.com/gh/chukwuemekachm/utility_manager_web.svg?style=svg)](https://circleci.com/gh/chukwuemekachm/utility_manager_web)

This is a Utility Manager application that makes it easy for engineers to track the appliances in their
place of work. Some of the main  features are:
- Engineer can log readings of parameters of their appliance to the app daily.
- Engineers can create and export reports based on previous values logged.
- Users can view a visual representation(graphs, charts etc) of the logs

## Setup App

To start the app:
- Install `yarn` globally by running `npm install -g yarn`
- Install all the app dependencies via `yarn install`
- Start dev server via `yarn run dev` to open the app

To setup commit template used in the app:

```bash
git config --local commit.template .gitmessage
```


## Linting Automation
You can lint the files in your commit by running:
```bash
yarn run lint
```
