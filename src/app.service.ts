import { Injectable } from '@nestjs/common';
import { rejects } from 'assert';
import axios from 'axios';
import { resolve } from 'path';
import { HttpService } from '@nestjs/axios';
import { Observable, firstValueFrom, from, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { response } from 'express';
import { PrismaService } from './prisma.service';
import { products, Prisma } from '@prisma/client';


@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService,
    private prisma: PrismaService) {

  }
  getProducts(): string {
    return 'Select * from products'
  }
  async getHello(parm: any): Promise<any> {
    //let qresp = await this.prisma.$queryRaw(Prisma.sql`insert into products (product_name,updated_by) values('led','wali')`);
    let result = await this.prisma.$queryRaw(Prisma.sql`Select * from products`);
    // let resp = await this.prisma.products.findMany({
    //   where: {
    //     AND: [
    //       {
    //         id: {
    //           equals: 1
    //         },
    //         product_name: {
    //           equals: 'mobile'
    //         }

    //       },
    //       {
    //         AND: [
    //           {
    //             id: {
    //               equals: 2
    //             },
    //             product_name: {
    //               equals: 'laptop'
    //             }
    //           },
    //         ]
    //       }
    //     ]
    //   },
    // });
    return result;


    // of(1, 2, 3)
    //   .pipe(map((x) => x * x))
    //   .subscribe((v) => console.log(`value: ${v}`));
    // var resp = 1;
    // const data = await firstValueFrom(this.findAll().pipe(map(x => {
    //   const newObj = { ...x.data, stock: x.data.stock * 3 }
    //   return newObj;
    // })))
    // return data
    // await this.findAll().subscribe(response => 



    // console.log(parm.id)
    // let jsonObj = {
    //   name: 'hamza',
    //   age: 28

    // }
    // return jsonObj;
  }

  findAll(): Observable<any> {
    return this.httpService.get('https://dummyjson.com/products/1');
  }

  async getData() {
    let url = 'https://dummyjson.com/products/1';
    let response = await axios.get(url);
  }


  SaveData() {
    console.log('Data is posted');
    return 'Data is posted';

  }
}
