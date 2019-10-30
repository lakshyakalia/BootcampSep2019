using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace API_project.Models
{

    public partial class DotNetAPIContext : DbContext
    {
        public DotNetAPIContext()
        {

        }
        public DotNetAPIContext(DbContextOptions<DotNetAPIContext> options):base(options)
        {

        }
        public virtual DbSet<Brand> Brand { get; set; }
        public virtual DbSet<Order> Order { get; set; }
        public virtual DbSet<Product> Product { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //String cn = @"Server=CYG359;Database=DotNetAPI;Trusted_Connection=true;";
            //optionsBuilder.UseSqlServer(cn);
            //base.OnConfiguring(optionsBuilder);

             if (!optionsBuilder.IsConfigured)
               {
           // #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                    optionsBuilder.UseSqlServer(@"Server=CYG359;Database=DotNetAPI;Trusted_Connection=true;");
              }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Brand>(entity =>
            {
                entity.HasKey(e => e.BId);

                entity.Property(e => e.BId)
                    .HasColumnName("b_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.BName).HasColumnName("b_name");

                entity.Property(e => e.PId).HasColumnName("p_id");
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasKey(e => e.BId);

                entity.Property(e => e.BId)
                    .HasColumnName("b_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.PName)
                    .HasColumnName("p_name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Qty).HasColumnName("qty");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.PId);

                entity.Property(e => e.PId)
                    .HasColumnName("p_id")
                    .ValueGeneratedNever();

                entity.Property(e => e.PName)
                    .HasColumnName("p_name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PPrice).HasColumnName("p_price");
            });
        }
    }
}
