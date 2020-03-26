// multilang

import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

const userdata = require('./assets/data.json')
const langs = require('./assets/loc/loc.json')

for(let key in userdata.images) {

    userdata.images[key] = require('./assets/img/' + userdata.images[key]).default

}

const traverse = (tree, proc) => {

    if(typeof tree === "object") {

        for(let k in tree) {

            proc(tree[k], k, tree)
            traverse(tree[k], proc)

        }

    }

}

traverse(userdata, (value, key, parent) => {
    
    if(key === 'image' && userdata.images[value]) {

        parent[key] = userdata.images[value]

    }

})

for(let lang of langs) {

    const data = require('./assets/loc/' + lang.key + '.json')
    const lang_keys = Object.keys(data)
    lang.data = JSON.parse(JSON.stringify(userdata))

    traverse(lang.data, (value, key, parent) => {

        if(!['image', 'icon', 'tag'].includes(key) && lang_keys.includes(value)) {

            parent[key] = data[value]

        }

    })

}

export default new MLCreate({
    initial: langs[0].name,
    languages: langs.map(lang => new MLanguage(lang.name).create(lang.data))
})
