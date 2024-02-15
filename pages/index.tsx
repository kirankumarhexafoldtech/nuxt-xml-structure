import  NuxtLink from "@/plugins/nuxt-link"
import Example from "./example";

export default defineComponent({
  setup(props, ctx) {
    const handleExampleClickedData = (data:string) =>{
      console.log(data)
    };
    return {
      handleExampleClickedData
    }
  },
    render () {
      return <div>
        <h1>Welcome to remcash home.</h1>
        <NuxtLink to={"/login"}>Login</NuxtLink>
        <Example data={["hgchjwd","khgcsi","kjjgci"]} handleExampleClickedData={this.handleExampleClickedData}/>
      </div>
    }
});



