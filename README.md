# cropcompass-ui

##after cloning the repo, install dependencies
sudo npm install

##To launch the dev server
sudo npm run dev
navigate to localhost:3000


##To generate static bindles for production
sudo npm run deploy
bundles with ugly hashed names will be generated in /dist/. The files begin with 'vendor', and must be linked to in index.html.
This is difficult to automate, since the filenames are hashed.
