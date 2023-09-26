
        async function fetchData() {
            try {
                const response = await fetch('https://crudcrud.com/api/c183b097dd1446d1b7b4bbf6f7c0e884'); // Ganti dengan URL API yang sesuai
                const data = await response.json();
                
                // Loop melalui data produk dan tampilkan dalam daftar
                const productList = document.getElementById('productList');
                data.forEach(product => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${product.nama_produk} - ${product.harga}`;
                    productList.appendChild(listItem);
                });
            } catch (error) {
                console.error('Gagal mengambil data:', error);
            }
        }

        fetchData();
