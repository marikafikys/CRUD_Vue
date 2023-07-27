Vue.createApp({
  data() {
    return {
      isOpen: false,
      valueInput: '',
      lastName: '',
      firstName: '',
      email: '',
      site: '',
      avatar: '',
      birthday: '',
      user: {},
      userList: [],
    };
  },
  methods: {
    // showPopup (isOpen = false) {
    //   console.log('show', isOpen);
    //   return isOpen;
    // },
    setShowPopup(value) {
      this.isOpen = value;
      // console.log('set', isOpen);
      // this.showPopup(isOpen);
    },
    // handleInput (event) {
    //   this.valueInput = event.target.value;
    // },
    addUser () {
      // console.log(event.target.value);
      // if(this.valueInput === '') { return };
      this.user = {
        lastName: this.lastName,
        firstName: this.firstName,
        email: this.email,
        site: this.site,
        avatar: this.avatar,
        birthday: this.birthday,
        id: Math.round(Math.random()*1000)
      };
      this.userList.push(this.user);
      this.isOpen = false;
      // this.valueInput = '';
    },
    // doCheck (index, type) {
    //   if(type === 'need') {
    //     const completeMask = this.needDoList.splice(index, 1);
    //     this.completeList.push(...completeMask);
    //   }
    //   else {
    //     const noCompleteMask = this.completeList.splice(index, 1);
    //     this.needDoList.push(...noCompleteMask);
    //   }
    // },
    removeUser (index, type) {

    },
    removeUser (index) {
      this.userList.splice(index, 1);
    }
  }
}
).mount('#app');