import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: 'Product 1',
        price: 10.99,
        photo:
          ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nQv2GS_vbhX21CXP7BFNIs49-Oe58BFwrA&sg',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 9.99,
        photo:
          ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDB_UJQaum4HVU1p4ci_5KQfYh9FHGVR06Mg&s',
      },
      {
        id: 3,
        name: 'Product 3',
        price: 12.99,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKLCDVp_4cZTMvwWJ81euroT-jWtUTCr0eA&s',
      },
      {
        id: 4,
        name: 'Product 4',
        price: 12.99,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorqHca_4QpZkS9O12VRrg6omGB7TDda4ZAA&s',
      },
      {
        id: 5,
        name: 'Product 5',
        price: 12.99,
        photo:
          ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ3aaoK0egI98Ez1xKglW7db-IzD1jnduBOw&s',
      },
      {
        id: 6,
        name: 'Product 6',
        price: 12.99,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQnoAPkYxHeQ4l7ZtCcF25YUEnxmRcg-H_Cw&s',
      },
      {
        id: 7,
        name: 'Product 7',
        price: 12.99,
        photo:
          ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-45AbxPpyzf3mg_t_ix7QyFYU9VzJHdPeUw&s',
      },
      {
        id: 8,
        name: 'Product 8',
        price: 12.99,
        photo:
          ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mtTVLujoJt3GRpNS32SuWG2hNvqeXENXtw&s',
      },
      {
        id: 9,
        name: 'Product 9',
        price: 12.99,
        photo:
          ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKYio2FTdhZpGDS3tP9PMHbYvlrC9mXt5Z8k3s3Bsgg&s',
      },
      {
        id: 10,
        name: 'Product 10',
        price: 12.99,
        photo:
          ' https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/13/2023/10/22/WhatsApp-Image-2023-10-20-at-162637-2347730375.jpeg',
      },
      {
        id: 11,
        name: 'Product 11',
        price: 12.99,
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07_35osjHkVvE0R9tnAbsf3hOBV5vEqPYogiIqz5Jpw&s',
      },
      {
        id: 12,
        name: 'Product 12',
        price: 12.99,
        photo:
          'https://akcdn.detik.net.id/visual/2017/02/17/b93fff14-edef-45bc-af50-26d1018c7097_43.jpg?w=720&q=90',
      },
      {
        id: 13,
        name: 'Product 13',
        price: 12.99,
        photo:
          'https://imgsrv2.voi.id/NHERCsUgSp9LCej5gInkXfW-1fMbEIweNzIRpTl_1Lo/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8yMTk1NTgvMjAyMjEwMTgxNTQ1LW1haW4uanBn.jpg',
      },
      {
        id: 14,
        name: 'Product 14',
        price: 12.99,
        photo:
          'https://asset.kompas.com/crops/yGLItcUCKaIl5BgW-ErcYjQyQCQ=/0x0:954x636/750x500/data/photo/2022/09/11/631dd65ee121e.jpg',
      },
      {
        id: 15,
        name: 'Product 15',
        price: 12.99,
        photo:
          'https://media.istockphoto.com/id/538335769/id/foto/donat-dengan-taburan-terisolasi.jpg?s=612x612&w=0&k=20&c=cXxVawsja_b1RDWEt7-bVozf4WNVKwSMkVkZjuFRkyo=',
      },
    ];
    setProducts(products);
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 10 }}>
        <FlatList
          data={products}
          numColumns={2}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginTop: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Donat
            </Text>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: 'aqua',
                maxWidth: '45%',
                maxHeight: 400,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                padding: 20,
                borderRadius: 10,
                borderWidth: 2,
                shadowRadius: 5,
              }}>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 110, height: 120, borderRadius: 5 }}
              />
              <Text style={{ paddingVertical: 20 }}>{item.name}</Text>
              <Text style={{ paddingBottom: 20 }}>Price: ${item.price}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;