using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Cyecom.Models
{
    public partial class E_CommContext : DbContext
    {
        public E_CommContext()
        {
            
        }
        public E_CommContext(DbContextOptions<E_CommContext>options):base(options)
        {

        }

        public virtual DbSet<Brand> Brand { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Tax> Tax { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string cn = @"Server=CYG355;Database=E-Comm;Trusted_Connection=True;";
            optionsBuilder.UseSqlServer(cn);
            base.OnConfiguring(optionsBuilder);
         //   if (!optionsBuilder.IsConfigured)
           // {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
  //              optionsBuilder.UseSqlServer(@"Server=CYG355;Database=E-Comm;Trusted_connection=true;");
    //        }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Brand>(entity =>
            {
                entity.HasKey(e => e.Pid);

                entity.Property(e => e.Pid).ValueGeneratedNever();

                entity.Property(e => e.Bname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.P)
                    .WithOne(p => p.InverseP)
                    .HasForeignKey<Brand>(d => d.Pid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Orders_Brand");
            });

            modelBuilder.Entity<Orders>(entity =>
            {
                entity.HasKey(e => e.Pname);

                entity.Property(e => e.Pname)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .ValueGeneratedNever();
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.Pid);

                entity.Property(e => e.Pid).ValueGeneratedNever();

                entity.Property(e => e.Pname)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Tax>(entity =>
            {
                entity.HasKey(e => e.Pid);

                entity.Property(e => e.Pid).ValueGeneratedNever();

                entity.Property(e => e.Gst).HasColumnName("GST");
            });
        }
    }
}
