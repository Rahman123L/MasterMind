function pointManager() {
    return {
        newPoint: '',
        points: [],
        errorMessage: '',

        addPoint() {
            if (this.newPoint.trim() === '') {
                this.errorMessage = "Point tidak boleh kosong.";
                return;
            }

            if (this.points.length >= 5) {
                this.errorMessage = "Maksimal 5 point yang bisa ditambahkan.";
                return;
            }

            this.points.push(this.newPoint.trim());
            this.newPoint = '';
            this.errorMessage = '';
        },

        removePoint(index) {
            this.points.splice(index, 1);
        }
    }
}