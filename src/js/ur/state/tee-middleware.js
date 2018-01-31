function createTeeMiddlware(options) {

    const _stck = (function() {
        return ({
            limit: options.limit,
            arr: [],
            index: 0,
            push: function(element) {
                if (this.arr.length >= this.limit) {
                    this.arr.shift();
                    --this.index;
                }
                if (this.index < this.limit) {
                    this.arr = this.arr.slice(0, this.index);
                }
                this.arr.push(element);
                ++this.index;
            },
            undo: function() {
                if (this.index >= 0) {
                    return this.arr[--this.index];
                }
            },
            redo: function() {
                if (this.index < this.limit) {
                    return this.arr[++this.index];
                }
            }
        });
    })();

    window._stck = _stck;

    return function _tee(store) {
        return function wrapDispatch(next) {
            return function dispatchAndTee(action) {
                let result = next(action);
                if (['UNDO', 'REDO'].indexOf(action.type) === -1) {
                    _stck.push(store.getState())
                }
                return result;
            }
        }
    };
}


export default createTeeMiddlware;
