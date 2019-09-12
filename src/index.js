// import 'dotenv/config';
import assert from 'assert';
import fs from 'fs';

console.log(process.env.TEST_VAR);


const isBoolea = (b) => {
    return typeof b === 'boolean'
}
const isNumber = (n) => {
    return typeof n === 'number' && !Number.isNaN(n)
}
const isObject = (o) => {
    return typeof o != null && typeof o = 'object'
}
const isString = (s) => {
    return typeof s === 'string'
}

// module.exports = staticgen

export default class staticgen {

    constructor(directory) {
        if (!(this instanceof staticgen)) return new staticgen(directory)

        assert(directory, 'You must pass a working directory')
        this.plugins = []
        this.ignores = []
        this.directory(directory)
        this.metadata({})
        this.source('src')
        this.destination('build')
        this.concurrency(Infinity)
        this.clean(true)
        this.frontmatter(true)
    }

    /**
     * @param  {function} plugin
     * @return {staticgen}
     */
    use(plugin) {
        this.plugins.push(plugin)
        return this
    }

    directory(directory) {
        if (!arguments.length) return path.resolve(this._directory)
        assert(isString(directory), 'You must pass a directory path string')
        this._directory = directory
        return this
    }

    metadata(metadata) {
        if (!arguments.length) return this._metadata
        assert(isObject(metadata), 'You must pass a metadata object')
        this._metadata = clone(metadata)
        return this
    }

    source(path) {
        if (!arguments.length) return this.path(this._source)
        assert(isString(path), 'You must pass a source path string.')
        this._source = path
        return this
    }

    destination(path) {
        if (!arguments.length) return this.path(this._destination)
        assert(isString(path), 'You must pass a destination path string')
        this._destination = path
        return this
    }

    concurrency(max) {
        if (!arguments.length) return this._concurrency
        assert(isNumber(max), 'You must pass a number for concurrency')
        this._concurrency = max
        return this
    }

    clean(clean) {
        if (!arguments.length) return this._clean
        assert(isBoolean(clean), 'You must pass a boolean')
        this._clean = clean
        return this
    }

    frontmatter(frontmatter) {
        if (!arguments.length) return this._frontmatter
        assert(isBoolean(frontmatter), 'You must pass a boolean')
        this._frontmatter = frontmatter
        return this
    }

    ignore(files) {
        if (!arguments.length) return this.ignore.slice()
        this.ignores = this.ignores.concat(files)
        return this
    }

    path() {
        let paths = [].slice.call(arguments)
    }

}
