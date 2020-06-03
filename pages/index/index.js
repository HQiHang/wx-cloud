const db = wx.cloud.database();
Page({
  data: {
    name: '',
    age: '',
    id: '',
    cName: '',
    cAge: '',
    cId: ''
  },
  handleEnterName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  handleEnterAge(e){
    this.setData({
      age: e.detail.value
    })
  },
  handleSave(){
    db.collection('list').add({
      data: {
        name: this.data.name,
        age: this.data.age
      },
      success: res => {
        this.setData({
          name: '',
          age: ''
        })
        console.log(res)
      }
    })
  },
  handleQuery(){
    db.collection('list').get({
      success: res => {
        console.log(res)
      }
    })
  },
  handleEnterId(e){
    this.setData({
      id: e.detail.value
    })
  },
  handleDelete(){
    db.collection('list').doc(this.data.id).remove({
      success: res => {
        this.setData({
          id: ''
        })
        console.log(res)
      }
    })
  },
  handleChangeId(e){
    this.setData({
      cId: e.detail.value
    })
  },
  handleChangeName(e){
    this.setData({
      cName: e.detail.value
    })
  },
  handleChangeAge(e){
    this.setData({
      cAge: e.detail.value
    })
  },
  handleUpdate(){
    db.collection('list').doc(this.data.cId).update({
      data: {
        name: this.data.cName,
        age: this.data.cAge
      },
      success: res => {
        this.setData({
          cId: '',
          cName: '',
          cAge: ''
        })
        console.log(res)
      }
    })
  }
})
