Page({
    getInfo(){
        wx.cloud.callFunction({
            name: 'test',
            success: res => {
                console.log(res)
            }
        })
    },
    getDataBase(){
        wx.cloud.callFunction({
            name: 'database',
            success: res => {
                console.log(res)
            }
        })
    },
    addDataBase(){
        wx.cloud.callFunction({
            name: 'add',
            data: {
                name: 'lkq',
                age: '65'
            },
            success: res => {
                console.log(res)
            }
        })
    }
})