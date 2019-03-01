// var list = [{
//     title: "吃饭",
//     checked: true
// },{
//     title: "睡觉",
//     checked: false
// }]

//缓存设置
var setLocalStorage = {
    save(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    },
    get(key){
        return JSON.parse(localStorage.getItem(key))
    }
}
//数据
var list = setLocalStorage.get("task") || [];

//不同的哈希值的 对应不同的函数返回相应的list数据
var listchange = {
    all(list){
        return list
    },
    finish(list){
        return list.filter(function (x) {
            return x.checked
        })
    },
    unfinish(list){
        return list.filter(function (x) {
            return !x.checked
        })
    }
}
//vue实例
var vm = new Vue({
    el: ".task-middle",
    data: {
        list: list,
        inputValue: "",
        editing: "",
        enter: "",
        beforeValue: "",
        visibility: "all"
    },
    //监听list 改变时触发函数 
    //deep:true 可以使list中的对象发生改变时 也触发函数
    watch:{
        list: {
            deep: true,
            handler: function () {
                setLocalStorage.save("task",this.list)
            }   
        }
    },
    computed: {
        //绑定计算属性 随着list的变化而变化
        filterList(){
            //返回满足条件的数据个数
            return this.list.filter(function(x){return !x.checked}).length
        },

        //判断当前的哈希值 执行对应的函数 并返回相应的数据 绑定到html中 并渲染出来
        //兼容了无指定哈希值的情况
        hashVary(){
            return listchange[this.visibility](this.list) ? listchange[this.visibility](this.list) : this.list
        } 
    },
    methods: {
        //添加任务 将任务的数据push到list中
        addTodo(){
            this.list.push({
                title: this.inputValue,
                checked: false
            });
            this.inputValue = "";
        },
        //删除任务 获取触发的数据在总数据的index 从index开始裁剪一位
        cancel(todo){
            var index = this.list.indexOf(todo);
            this.list.splice(index,1);
        },
        //编辑任务 判断点击的数据 将其对应的input显示
        editingTodo(todo){
            this.editing = todo;
            this.enter = false;
            this.beforeValue = todo.title;
        },
        //编辑完成 将input隐藏并失去焦点
        edited(todo){
            this.enter = true;
            this.editing = ""
        },
        //取消编辑 将编辑前的数据保存并还原
        cencleEdit(todo){
            todo.title = this.beforeValue;
            this.beforeValue = ""
            this.editing = ""
        }
    },
    //自定义指令v-focus
    directives: {
        //自动聚焦
        focus: {
            update(el,binding){
                if(binding.value){
                    el.focus();
                }
            }
        },
        //bug修复 在enter之后还可以直接按下键盘上的任意键在input中输入 因为input只是overflow隐藏并没有失去焦点 所以增加一个方法
        blur: {
            update(el){
                // console.log(vm.enter)
                if(vm.enter){
                    el.blur();                 
                }
            }
        }     
    }
})
//绑定一个hashchange事件 
//将哈希值传给 vue实例的visibility
function hashchange () {
    var hash = window.location.hash.slice(1);
    vm.visibility = hash;
}
window.addEventListener("hashchange",hashchange,false)