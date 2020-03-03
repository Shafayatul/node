<<template>
    <v-col 
    cols="16"
    sm="12"
    md="6">
       <qrcode-stream @decode="onDecode"></qrcode-stream>
    </v-col>
</template>
<<script>
 import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
export default {
    data() {
        return {
            result: '',
            error: ''
        }
    },
    components: {
        QrcodeStream,
        QrcodeDropZone,
        QrcodeCapture
    },
    methods: {
        onDecode (decodedString) {
            console.log(decodedString)
            this.result = decodedString
            axios.post(`/api/check-in/${decodedString}`)
            .then((res) => {
                Toast.fire({
                    icon: 'success',
                    title: 'Verified successfully'
                })
            }).catch((err) => {
                
            });
        }
    }
}
</script>
