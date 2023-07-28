Vue.createApp({
  data() {
    return {
      popupTitle: '',
      errors: [],
      isOpen: false,
      lastName: '',
      firstName: '',
      email: '',
      site: '',
      avatar: '',
      birthday: '',
      id: '',
      user: {},
      userList: [],
    };
  },
  mounted() {
    if (localStorage.getItem('userList')) {
      this.userList = JSON.parse(localStorage.getItem("userList"));
    }
  },
  methods: {
    setShowPopup(value, mode) {
      this.isOpen = value;
      if (mode === 'add') {
        this.popupTitle = 'Create new user'
      } else if (mode === 'edit') {
        this.popupTitle = 'Edit user '+this.firstName+' '+this.lastName;
      }
    },
    checkForm () {
      this.errors = [];
      if (!this.firstName) {
        this.errors.push('Enter your first name');
      }
      if (!this.lastName) {
        this.errors.push('Enter your last name');
      }
      if (!this.validEmail(this.email) && this.email.length !== 0) {
        this.errors.push('Enter a valid email address');
      }
      if (!this.errors.length) {
        return true;
      }
    },
    validEmail (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    addUser () {
      if (this.checkForm()) {
        this.user = {
          lastName: this.lastName,
          firstName: this.firstName,
          email: this.email,
          site: this.site,
          avatar: this.avatar,
          birthday: this.birthday.split('-').reverse().join('.'),
          id: this.id || Math.round(Math.random()*1000)
        };
        // if (!this.user.id) {
        //   this.user.id = Math.round(Math.random()*1000)
        // }
        this.userList.push(this.user);
        this.isOpen = false;
        this.saveUsers();
        this.lastName = '';
        this.firstName = '';
        this.email = '';
        this.site = '';
        this.avatar = '';
        this.birthday = '';
      }
    },
    saveUsers() {
      const parsed = JSON.stringify(this.userList);
      localStorage.setItem('userList', parsed);
    },
    editUser(index) {
      let currentUser = this.userList[index];
      this.user = currentUser;
      this.lastName = currentUser.lastName;
      this.firstName = currentUser.firstName;
      this.email = currentUser.email;
      this.site = currentUser.site;
      this.avatar = currentUser.avatar;
      this.birthday = currentUser.birthday;
      this.id = currentUser.id;
      this.setShowPopup(true, 'edit');
      this.userList.splice(index, 1);
      this.user = {
        lastName: currentUser.lastName,
        firstName: currentUser.firstName,
        email: currentUser.email,
        site: currentUser.site,
        avatar: currentUser.avatar,
        birthday: currentUser.birthday,
        id: currentUser.id
      }
    },
    removeUser (index) {
      if (confirm("Are you sure?")) {
        this.userList.splice(index, 1);
        this.saveUsers();
      }
    }
  }
}
).mount('#app');