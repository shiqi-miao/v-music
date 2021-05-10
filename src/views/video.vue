
<template>
    <video ref="videoAuto" width="100%" controls="controls" muted autoplay>
        <source src="https://image.robooot.com/seedling-dir/1.mp4" type="video/mp4">
    </video>
</template>
<script>
export default {
    data() {
         return {
         }
    },
    created(){
        this.$nextTick(_ => {
                let self= this
                let videos = self.$refs.videoAuto;
                videos.play();
                document.addEventListener('WeixinJSBridgeReady',function(){  
                   videos.play();
                },false);
                })
    },
    methods: {
    }
};
</script>


