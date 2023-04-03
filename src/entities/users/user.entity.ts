import { Column, Entity, JoinColumn, ManyToMany, OneToOne } from 'typeorm';

import { BaseEntity } from '@entities/common';
import { ProductEntity } from '@entities/product';
import { UserAvatarEntity } from '@entities/user-avatar';
import { UserRole } from '@models/enum';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'user_id', unique: true })
  userId: string;

  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'varchar', name: 'surname' })
  surname: string;

  @Column({ type: 'varchar', name: 'email', unique: true })
  email: string;

  @Column({ type: 'varchar', name: 'password', select: false })
  password: string;

  @Column({ type: 'varchar', name: 'address' })
  address: string;

  @Column({ type: 'enum', name: 'user_role', enum: UserRole, default: UserRole.Client })
  role: UserRole;

  @OneToOne(() => UserAvatarEntity)
  @JoinColumn()
  avatar: UserAvatarEntity;

  @ManyToMany(() => ProductEntity, (products: ProductEntity) => products.users)
  favoriteProducts: ProductEntity[];
}