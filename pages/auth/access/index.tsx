/*
author: kirankumar@hexafoldtech.com
*/

import Wallet from "@/assets/svg/wallet.svg";
import PayBills from "@/assets/svg/pay_bills.svg";
import MoneyTransfer from "@/assets/svg/instant_money_tranfer.svg";
import Login from "@/components/auth/login";
import BackgroundImage from "@/assets/svg/bg_glob.svg";
import RamecashLogo from "@/assets/svg/logo01.svg";

export default defineComponent({
  setup() {
    const showForm = ref("")
    const leftScrollContent = reactive([
      {
        img: Wallet,
        heading: "Secure digital wallet",
        description:
          "Remcash provides a fully secure digital wallet to ease everyday transactions",
      },
      {
        img: PayBills,
        heading: "Instant money transfer",
        description:
          "Remcash provides fast, secure and instant money transfers across the globe",
      },
      {
        img: MoneyTransfer,
        heading: "Pay the bills easily",
        description:
          "With Remcash, paying bills is quick and easy, fully secure and convenient",
      },
    ]);
    // carosel conttent reference variable
    const leftScrollContentPosition = ref(0);
    // carousel content method
    const leftScroll = () => {
      // Add data attribute to trigger transition
      leftScrollContentPosition.value =
        (leftScrollContentPosition.value + 1) % leftScrollContent.length;
    };
    // functions
    const handleRegisterView = (data:boolean) =>{
       showForm.value = "register"
    } 
    // life cycle hooks
    onMounted(() => {
      const intervalId = setInterval(leftScroll, 5000); // Change image every 5000 milliseconds (5 seconds)
      // Clear the interval when the component is unmounted
      onBeforeUnmount(() => {
        clearInterval(intervalId);
      });
    });
    return {
      leftScrollContent,
      leftScrollContentPosition,
      handleRegisterView,
      showForm
    };
  },
  render() {
    return (
      <div class="main_auth">
        <div class="main_auth_left">
          <div class="main_auth_left-top">
            <img
              src={this.leftScrollContent[this.leftScrollContentPosition].img}
              alt=""
              ref="imageRef"
              class="leftImage"
            />
          </div>

          <div class="main_auth_left-bottom">
            <h2>
              {this.leftScrollContent[this.leftScrollContentPosition].heading}
            </h2>
            <p>
              {
                this.leftScrollContent[this.leftScrollContentPosition]
                  .description
              }
            </p>
          </div>
        </div>
        <div class="main_auth_right">
          <div class="main_auth_form">
            <div class="main_auth_logo">
              <img src={RamecashLogo} alt="" />
              <p>Remcash</p>
            </div>
               <Login/>
          </div>
          <div class="main_auth_background">
            <img src={BackgroundImage} alt="" />
          </div>
        </div>
      </div>
    );
  },
});
