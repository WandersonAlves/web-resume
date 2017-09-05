export default {
    methods: {
        previousPage() {
            let actualRoute = this.$route.name;
            if (actualRoute === 'about') {
                this.$router.push({name: 'presentation'});
            }
            else if (actualRoute === 'contact') {
                this.$router.push({ name: 'skills' });
            }
            else if (actualRoute === 'skills') {
                this.$router.push({ name: 'about' });
            }
        },
        nextPage() {
            let actualRoute = this.$route.name;
            if (actualRoute === 'presentation') {
                this.$router.push({ name: 'about' });
            }
            else if (actualRoute === 'about') {
                this.$router.push({ name: 'skills' });
            }
            else if (actualRoute === 'skills') {
                this.$router.push({ name: 'contact' });
            }
        }
    }
}