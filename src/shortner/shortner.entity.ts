import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShortnedUrls {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  actual_url: string;

  @Column()
  shortened_url: string;
}
